export type Cell = { 
    value?: string;
    bgColor?: string;
    color?: string;
}

// Convert an Excel column name into it's index
export function alphabetToNumber(letters: string) {
    return letters.split('').reduce((r, a) => r * 26 + parseInt(a, 36) - 9, 0);
}

export function cellToIndex(cell: string) {
    const regex = new RegExp('([0-9]+)|([a-zA-Z]+)', 'g');
    const colRow = cell.match(regex);
    return { col: alphabetToNumber(colRow?.[0] || ''), row: Number(colRow?.[1]) };
}

const chars = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
]

export function numberToAlphabet(index: number): string {
    index -= 1;

    const quotient = Math.floor(index / 26);
    if (quotient > 0) {
        return numberToAlphabet(quotient) + chars[index % 26];
    }
    else {
        return chars[index % 26];
    }
}