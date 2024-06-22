import React, { useState } from "react";
import { Button } from "@mui/material";
import { sizeProduct } from "../../mock/productSize";

interface ISizeSelector { handleProductSize?: ( size: string ) => void; }

const SizeSelector: React.FunctionComponent<ISizeSelector> = ( { handleProductSize = () => {} } ) => {

  
    return (
        <table>
            <tbody>
                <tr>
                    {sizeProduct.map(({ size }, index) => {
                        return (
                            <td key={index}>
                                <Button
                                    onClick={() => handleProductSize(size)}
                                    variant='text'
                                    style={{
                                        height: '20px',
                                        color: 'black',
                                        fontWeight: 900
                                    }}
                                >
                                    {size}
                                </Button>
                            </td>
                        )
                    })}
                </tr>
            </tbody>
        </table>
    )
}

export default SizeSelector;