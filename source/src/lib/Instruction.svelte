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

    function isNumeric(str) {
        return /^\d+$/.test(str);
    }
    const binary = (opcode) => {
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
    const decriptions = {
        xxx: "000(0) to 111(7)",
        rrr: "000 (b), 001 (c), 010 (d), 011 (e), 100 (h), 101 (l), 110 (m), 111 (a)",
        rr: "00 (bc), 01 (de), 10 (hl), 11 (sp)",
        r: "0 (bc), 1 (de)",
        ddd: "000 (b), 001 (c), 010 (d), 011 (e), 100 (h), 101 (l), 110 (m), 111 (a)",
        sss: "000 (b), 001 (c), 010 (d), 011 (e), 100 (h), 101 (l), 110 (m), 111 (a)",
    };
    const parse_mask = (mask) => {
        let max = 0;
        for (let key in decriptions) {
            if (key.length >= max && mask.includes(key)) {
                const hint = decriptions[key];
                const tag = `<span class="cursor-help" title="${key}: ${hint}">${key}</span>`;
                mask = mask.replace(key, tag);
                max = key.length;
            }
        }
        return "<b>" + mask + "</b>";
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
            <span class="text-xs font-mono">{@html parse_mask(mask)}</span>
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
                {#each extra[mnemonic] as line}
                        <p>{line}</p>
                    {/each}
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
