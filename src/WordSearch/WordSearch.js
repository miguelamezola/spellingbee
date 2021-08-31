import './WordSearch.css'
import React from 'react';

export const WordSearch = () => {
    const data = [
        ['A', 'B', 'C', 'D', 'E','F', 'G', 'H', 'I', 'J'],
        ['K', 'L', 'M', 'N', 'O','P', 'Q', 'R', 'S', 'T'],
        ['U', 'V', 'W', 'X', 'Y','','','','','']
    ]
    const scalar = 15;
    const margin = 10;
    const viewBoxValue = `0 0 ${(data[0].length * scalar) + (2 * margin)} ${(data.length * scalar) + (2 * margin)}`;
    return (
        <div className="WordSearch">
            <svg viewBox={ viewBoxValue } xmlns="http://www.w3.org/2000/svg">
                <path stroke="black" d={`M ${margin} ${margin} L ${data[0].length * scalar + margin} ${margin}`} style={{strokeWidth: 0.5}} />
                <path stroke="black" d={`M ${margin} ${margin} L ${margin} ${data.length * scalar + margin}`} style={{strokeWidth: 0.5}} />
                {data.map((row, i) => {
                    const h = (i + 1) * scalar + margin;
                    const dString = `M ${margin} ${h} L ${row.length * scalar + margin} ${h}`;
                    const cols = row.map((col, j) => {
                        const w = (j+ 1) * scalar + margin;
                        const dString = `M ${w} ${margin} L ${w} ${data.length * scalar + margin}`;
                        return (
                            <React.Fragment key={j}>
                                <text x={margin + (scalar * 0.25) + (j * scalar)} y={margin + ((i + 1) * scalar) - (scalar * 0.25)}>{ data[i][j] }</text>
                                <path stroke="black" d={dString} style={{strokeWidth: 0.5}} />
                            </React.Fragment>
                        );
                    })
                    return (
                        <React.Fragment key={i}>
                            { cols }
                            <path stroke="black" d={dString} style={{strokeWidth: 0.5}} />
                        </React.Fragment>
                    );
                })}
            </svg>
        </div>
    );
}