import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FormControl, Badge } from "react-bootstrap";

export default function Children(props) {
    let count = useSelector(state => state.count);
    let [outlineColor, setOutlineColor] = useState("white");

    const handleChangeOutline = (e) => {
        setOutlineColor(e.target.value);
    }

    return (
        <div>
            <div className="box" style={{ backgroundColor: `${props.bgColor}` }}>
                <h4 className="text">
                    <Badge variant="warning" >Colorful box</Badge>
                </h4>
                <div className="input-text">
                    {
                        count >= 10 ?
                            <FormControl type="text" placeholder="Input your color"
                                style={{ backgroundColor: `${outlineColor}`, color: `red` }}
                                onChange={handleChangeOutline}>
                            </FormControl> :
                            <FormControl type="text" placeholder="Input your color"
                                style={{ backgroundColor: `${outlineColor}`, color: `black` }}
                                onChange={handleChangeOutline}>
                            </FormControl>
                    }
                </div>
            </div>
        </div>
    )
}
