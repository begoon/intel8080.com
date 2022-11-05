<script>
    export let instruction;
    export let masks;
    export let flags;
    export let extra;

    let [opcode, mnemonic, operands, tags, cycles, mask] =
        instruction.split(",");
    let [operad1, operad2] = operands.split("|");
    tags = tags.split("|");

    mask = mask || masks[mnemonic];

    /**
     * @param {string} str
     */
    function isNumeric(str) {
        return /^\d+$/.test(str);
    }
    const binary = (/** @type {string} */ opcode) => {
        const bits = parseInt(opcode, 16).toString(2).padStart(8, "0");
        if (!mask) return bits;
        let colored = "";
        const colors = {
            r: "lightgrey",
            x: "lightgrey",
            s: "yellow",
            d: "cyan",
        };
        for (let i = 0; i < mask.length; ++i) {
            const c = mask[i];
            if (isNumeric(c)) colored += bits[i];
            else {
                colored +=
                    `<b style='background: ${colors[c]}'>` + bits[i] + "</b>";
            }
        }
        return colored;
    };
    const registers = {
        xxx: "000(0) to 111(7)",
        ddd: "000 (b), 001 (c), 010 (d), 011 (e), 100 (h), 101 (l), 110 (m), 111 (a)",
        sss: "000 (b), 001 (c), 010 (d), 011 (e), 100 (h), 101 (l), 110 (m), 111 (a)",
        rrr: "000 (b), 001 (c), 010 (d), 011 (e), 100 (h), 101 (l), 110 (m), 111 (a)",
        rr: "00 (bc), 01 (de), 10 (hl), 11 (sp)",
        r: "0 (bc), 1 (de)",
    };
    const parse_mask = (/** @type {string} */ mask) => {
        let max = 0;
        const tag = (/** @type {string} */ key, /** @type {string} */ hint) =>
            `<span class="cursor-help" title="${hint}">${key}</span>`;
        for (let register in registers) {
            if (register.length >= max && mask.includes(register)) {
                const hint = registers[register];
                mask = mask.replace(register, tag(register, hint));
                max = register.length;
            }
        }
        return mask;
    };
</script>

<tr class="border-1">
    <td class="pl-2">
        {opcode}
    </td>
    <td class="pl-2">
        {parseInt(opcode, 16).toString(10).padStart(3, "0")}
    </td>
    <td class="pl-2">
        {@html binary(opcode)}
    </td>
    <td class="pl-2">{mnemonic}</td>
    <td class="pl-2">{operad1 ?? ""}</td>
    <td class="pl-2">{operad2 ?? ""}</td>
    <td class="pl-4">{cycles}</td>
    <td class="pl-4">
        {#if mask}
            <span class="text-xs font-mono font-bold">
                {@html parse_mask(mask)}
            </span>
        {/if}
    </td>
    <td class="pl-4">{flags[mnemonic] ?? ""}</td>
    <td class="pl-2">
        {#if tags.length > 0}
            {tags.join(", ")}
        {/if}
        {#if extra && extra[mnemonic]}
            <div>
                <p>Pseudocode:</p>
                <pre class="text-sm">
                    {#each extra[mnemonic] as line}<p>{line}</p>{/each}
                </pre>
            </div>
        {/if}
    </td>
</tr>

<style>
    td {
        vertical-align: top;
    }
</style>
