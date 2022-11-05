<script>
    import { extra, flags, instructions, masks } from "./assets/opcodes.js";
    import Instruction from "./lib/Instruction.svelte";

    let filter = "";

    const normalize = (value, { sep }) =>
        value
            .toLowerCase()
            .split(sep)
            .filter((x) => x.trim());

    const visible = (instruction) => {
        if (!filter) return true;
        const words = normalize(filter, { sep: " " });
        const parts = normalize(instruction, { sep: "," });
        for (const word of words) {
            let good = false;
            for (const part of parts) {
                if (word.startsWith("-")) {
                    if (word.length > 1 && part.includes(word.substring(1))) {
                        return false;
                    }
                    good = true;
                } else {
                    if (part.includes(word)) good = true;
                }
            }
            if (!good) return false;
        }
        return true;
    };
</script>

<div class="absolute top-4 left-4 right-4 text-left">
    <div>
        Enter keywords to filter (use '-' to negate), for example, "mov c" or
        "inx -23".
    </div>
    <input
        bind:value={filter}
        placeholder="filter..."
        class="border-2 border-slate-200 mb-4 w-full"
    />
    {#key filter}
        <table class="table-auto border-collapse">
            <thead>
                <tr>
                    <th>Opcode</th>
                    <th />
                    <th />
                    <th class="pl-2">Mnemonic</th>
                    <th class="pl-2">Argument 1</th>
                    <th class="pl-2">Argument 2</th>
                    <th class="pl-4">Cycles</th>
                    <th class="pl-4">Mask</th>
                    <th class="pl-4">Flags</th>
                    <th class="pl-2">Tags</th>
                </tr>
            </thead>
            {#each instructions as instruction}
                {#if visible(instruction)}
                    <Instruction
                        {instruction}
                        {masks}
                        {flags}
                        extra={filter ? extra : null}
                    />
                {/if}
            {/each}
        </table>
    {/key}
</div>

<style>
</style>
