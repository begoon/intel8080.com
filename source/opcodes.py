opcodes = [
    ['00', 'NOP', [], []],
    ['08', 'NOP?', [], ['undocumented']],
    ['10', 'NOP?', [], ['undocumented']],
    ['20', 'NOP?', [], ['undocumented']],
    ['18', 'NOP?', [], ['undocumented']],
    ['28', 'NOP?', [], ['undocumented']],
    ['30', 'NOP?', [], ['undocumented']],
    ['38', 'NOP?', [], ['undocumented']],
    ['01', 'LXI', ['B', 'DATA16'], []],
    ['02', 'STAX', ['B'], []],
    ['03', 'INX', ['B'], []],
    ['04', 'INR', ['B'], []],
    ['05', 'DCR', ['B'], []],
    ['06', 'MVI', ['B', 'DATA8'], []],
    ['07', 'RLC', [], []],
    ['09', 'DAD', ['B'], []],
    ['0A', 'LDAX', ['B'], []],
    ['0B', 'DCX', ['B'], []],
    ['0C', 'INR', ['C'], []],
    ['0D', 'DCR', ['C'], []],
    ['0E', 'MVI', ['C', 'DATA8'], []],
    ['0F', 'RRC', [], []],
    ['11', 'LXI', ['D', 'DATA16'], []],
    ['12', 'STAX', ['D'], []],
    ['13', 'INX', ['D'], []],
    ['14', 'INR', ['D'], []],
    ['15', 'DCR', ['D'], []],
    ['16', 'MVI', ['D', 'DATA8'], []],
    ['17', 'RAL', [], []],
    ['19', 'DAD', ['D'], []],
    ['1A', 'LDAX', ['D'], []],
    ['1B', 'DCX', ['D'], []],
    ['1C', 'INR', ['E'], []],
    ['1D', 'DCR', ['E'], []],
    ['1E', 'MVI', ['E', 'DATA8'], []],
    ['1F', 'RAR', [], []],
    ['21', 'LXI', ['H', 'DATA16'], []],
    ['22', 'SHLD', ['DATA16'], []],
    ['23', 'INX', ['H'], []],
    ['24', 'INR', ['H'], []],
    ['25', 'DCR', ['H'], []],
    ['26', 'MVI', ['H', 'DATA8'], []],
    ['27', 'DAA', [], []],
    ['29', 'DAD', ['H'], []],
    ['2A', 'LHLD', ['DATA16'], []],
    ['2B', 'DCX', ['H'], []],
    ['2C', 'INR', ['L'], []],
    ['2D', 'DCR', ['L'], []],
    ['2E', 'MVI', ['L', 'DATA8'], []],
    ['2F', 'CMA', [], []],
    ['31', 'LXI', ['SP', 'DATA16'], []],
    ['32', 'STA', ['DATA16'], []],
    ['33', 'INX', ['SP'], []],
    ['34', 'INR', ['M'], []],
    ['35', 'DCR', ['M'], []],
    ['36', 'MVI', ['M', 'DATA8'], []],
    ['37', 'STC', [], []],
    ['39', 'DAD', ['SP'], []],
    ['3A', 'LDA', ['DATA16'], []],
    ['3B', 'DCX', ['SP'], []],
    ['3C', 'INR', ['A'], []],
    ['3D', 'DCR', ['A'], []],
    ['3E', 'MVI', ['A', 'DATA8'], []],
    ['3F', 'CMC', [], []],
    ['76', 'HLT', [], []],
    ['40', 'MOV', ['B', 'B'], []],
    ['41', 'MOV', ['B', 'C'], []],
    ['42', 'MOV', ['B', 'D'], []],
    ['43', 'MOV', ['B', 'E'], []],
    ['44', 'MOV', ['B', 'H'], []],
    ['45', 'MOV', ['B', 'L'], []],
    ['46', 'MOV', ['B', 'M'], []],
    ['47', 'MOV', ['B', 'A'], []],
    ['48', 'MOV', ['C', 'B'], []],
    ['49', 'MOV', ['C', 'C'], []],
    ['4A', 'MOV', ['C', 'D'], []],
    ['4B', 'MOV', ['C', 'E'], []],
    ['4C', 'MOV', ['C', 'H'], []],
    ['4D', 'MOV', ['C', 'L'], []],
    ['4E', 'MOV', ['C', 'M'], []],
    ['4F', 'MOV', ['C', 'A'], []],
    ['50', 'MOV', ['D', 'B'], []],
    ['51', 'MOV', ['D', 'C'], []],
    ['52', 'MOV', ['D', 'D'], []],
    ['53', 'MOV', ['D', 'E'], []],
    ['54', 'MOV', ['D', 'H'], []],
    ['55', 'MOV', ['D', 'L'], []],
    ['56', 'MOV', ['D', 'M'], []],
    ['57', 'MOV', ['D', 'A'], []],
    ['58', 'MOV', ['E', 'B'], []],
    ['59', 'MOV', ['E', 'C'], []],
    ['5A', 'MOV', ['E', 'D'], []],
    ['5B', 'MOV', ['E', 'E'], []],
    ['5C', 'MOV', ['E', 'H'], []],
    ['5D', 'MOV', ['E', 'L'], []],
    ['5E', 'MOV', ['E', 'M'], []],
    ['5F', 'MOV', ['E', 'A'], []],
    ['60', 'MOV', ['H', 'B'], []],
    ['61', 'MOV', ['H', 'C'], []],
    ['62', 'MOV', ['H', 'D'], []],
    ['63', 'MOV', ['H', 'E'], []],
    ['64', 'MOV', ['H', 'H'], []],
    ['65', 'MOV', ['H', 'L'], []],
    ['66', 'MOV', ['H', 'M'], []],
    ['67', 'MOV', ['H', 'A'], []],
    ['68', 'MOV', ['L', 'B'], []],
    ['69', 'MOV', ['L', 'C'], []],
    ['6A', 'MOV', ['L', 'D'], []],
    ['6B', 'MOV', ['L', 'E'], []],
    ['6C', 'MOV', ['L', 'H'], []],
    ['6D', 'MOV', ['L', 'L'], []],
    ['6E', 'MOV', ['L', 'M'], []],
    ['6F', 'MOV', ['L', 'A'], []],
    ['70', 'MOV', ['M', 'B'], []],
    ['71', 'MOV', ['M', 'C'], []],
    ['72', 'MOV', ['M', 'D'], []],
    ['73', 'MOV', ['M', 'E'], []],
    ['74', 'MOV', ['M', 'H'], []],
    ['75', 'MOV', ['M', 'L'], []],
    ['77', 'MOV', ['M', 'A'], []],
    ['78', 'MOV', ['A', 'B'], []],
    ['79', 'MOV', ['A', 'C'], []],
    ['7A', 'MOV', ['A', 'D'], []],
    ['7B', 'MOV', ['A', 'E'], []],
    ['7C', 'MOV', ['A', 'H'], []],
    ['7D', 'MOV', ['A', 'L'], []],
    ['7E', 'MOV', ['A', 'M'], []],
    ['7F', 'MOV', ['M', 'M'], []],
    ['80', 'ADD', ['B'], []],
    ['81', 'ADD', ['C'], []],
    ['82', 'ADD', ['D'], []],
    ['83', 'ADD', ['E'], []],
    ['84', 'ADD', ['H'], []],
    ['85', 'ADD', ['L'], []],
    ['86', 'ADD', ['M'], []],
    ['87', 'ADD', ['A'], []],
    ['88', 'ADC', ['B'], []],
    ['89', 'ADC', ['C'], []],
    ['8A', 'ADC', ['D'], []],
    ['8B', 'ADC', ['E'], []],
    ['8C', 'ADC', ['H'], []],
    ['8D', 'ADC', ['L'], []],
    ['8E', 'ADC', ['M'], []],
    ['8F', 'ADC', ['A'], []],
    ['90', 'SUB', ['B'], []],
    ['91', 'SUB', ['C'], []],
    ['92', 'SUB', ['D'], []],
    ['93', 'SUB', ['E'], []],
    ['94', 'SUB', ['H'], []],
    ['95', 'SUB', ['L'], []],
    ['96', 'SUB', ['M'], []],
    ['97', 'SUB', ['A'], []],
    ['98', 'SBB', ['B'], []],
    ['99', 'SBB', ['C'], []],
    ['9A', 'SBB', ['D'], []],
    ['9B', 'SBB', ['E'], []],
    ['9C', 'SBB', ['H'], []],
    ['9D', 'SBB', ['L'], []],
    ['9E', 'SBB', ['M'], []],
    ['9F', 'SBB', ['A'], []],
    ['A0', 'ANA', ['B'], []],
    ['A1', 'ANA', ['C'], []],
    ['A2', 'ANA', ['D'], []],
    ['A3', 'ANA', ['E'], []],
    ['A4', 'ANA', ['H'], []],
    ['A5', 'ANA', ['L'], []],
    ['A6', 'ANA', ['M'], []],
    ['A7', 'ANA', ['A'], []],
    ['A8', 'XRA', ['B'], []],
    ['A9', 'XRA', ['C'], []],
    ['AA', 'XRA', ['D'], []],
    ['AB', 'XRA', ['E'], []],
    ['AC', 'XRA', ['H'], []],
    ['AD', 'XRA', ['L'], []],
    ['AE', 'XRA', ['M'], []],
    ['AF', 'XRA', ['A'], []],
    ['B0', 'ORA', ['B'], []],
    ['B1', 'ORA', ['C'], []],
    ['B2', 'ORA', ['D'], []],
    ['B3', 'ORA', ['E'], []],
    ['B4', 'ORA', ['H'], []],
    ['B5', 'ORA', ['L'], []],
    ['B6', 'ORA', ['M'], []],
    ['B7', 'ORA', ['A'], []],
    ['B8', 'CMP', ['B'], []],
    ['B9', 'CMP', ['C'], []],
    ['BA', 'CMP', ['D'], []],
    ['BB', 'CMP', ['E'], []],
    ['BC', 'CMP', ['H'], []],
    ['BD', 'CMP', ['L'], []],
    ['BE', 'CMP', ['M'], []],
    ['BF', 'CMP', ['A'], []],
    ['C0', 'RNZ', [], []],
    ['C1', 'POP', ['B'], []],
    ['C2', 'JNZ', ['DATA16'], []],
    ['C3', 'JMP', ['DATA16'], []],
    ['CB', 'JMP?', ['DATA16'], ['undocumented']],
    ['C4', 'CNZ', ['DATA16'], []],
    ['C5', 'PUSH', ['B'], []],
    ['C6', 'ADI', ['DATA8'], []],
    ['C7', 'RST', ['0'], []],
    ['C8', 'RZ', [], []],
    ['C9', 'RET', [], []],
    ['D9', 'RET?', [], ['undocumented']],
    ['CA', 'JZ', ['DATA16'], []],
    ['CC', 'CZ', ['DATA16'], []],
    ['CD', 'CALL', ['DATA16'], []],
    ['DD', 'CALL?', ['DATA16'], ['undocumented']],
    ['ED', 'CALL?', ['DATA16'], ['undocumented']],
    ['FD', 'CALL?', ['DATA16'], ['undocumented']],
    ['CE', 'ACI', ['DATA8'], []],
    ['CF', 'RST', ['1'], []],
    ['D0', 'RNC', [], []],
    ['D1', 'POP', ['D'], []],
    ['D2', 'JNC', ['DATA16'], []],
    ['D3', 'OUT', ['DATA8'], ['io']],
    ['D4', 'CNC', ['DATA16'], []],
    ['D5', 'PUSH', ['D'], []],
    ['D6', 'SUI', ['DATA8'], []],
    ['D7', 'RST', ['2'], []],
    ['D8', 'RC', [], []],
    ['DA', 'JC', ['DATA16'], []],
    ['DB', 'IN', ['DATA8'], ['io']],
    ['DC', 'CC', ['DATA16'], []],
    ['DE', 'SBI', ['DATA8'], []],
    ['DF', 'RST', ['3'], []],
    ['E0', 'RPO', [], []],
    ['E1', 'POP', ['H'], []],
    ['E2', 'JPO', ['DATA16'], []],
    ['E3', 'XTXL', [], []],
    ['E4', 'CPO', ['DATA16'], []],
    ['E5', 'PUSH', ['H'], []],
    ['E6', 'ANI', ['DATA8'], []],
    ['E7', 'RST', ['4'], []],
    ['E8', 'RPE', [], []],
    ['E9', 'PCHL', [], []],
    ['EA', 'JPE', ['DATA16'], []],
    ['EB', 'XCHG', [], []],
    ['EC', 'CPE', ['DATA16'], []],
    ['EE', 'XRI', ['DATA8'], []],
    ['EF', 'RST', ['5'], []],
    ['F0', 'RP', [], []],
    ['F1', 'POP', ['PSW'], []],
    ['F2', 'JP', ['DATA16'], []],
    ['F3', 'DI', [], ['interrupt']],
    ['F4', 'CP', ['DATA16'], []],
    ['F5', 'PUSH', ['PSW'], []],
    ['F6', 'ORI', ['DATA8'], []],
    ['F7', 'RST', ['6'], []],
    ['F8', 'RM', [], []],
    ['F9', 'SPHL', [], []],
    ['FA', 'JM', ['DATA16'], []],
    ['FB', 'EI', [], ['interrupt']],
    ['FC', 'CM', ['DATA16'], []],
    ['FE', 'CPI', ['DATA8'], []],
    ['FF', 'RST', ['7'], []],
]