import React, { useState, useEffect } from 'react';

const ScratchPad = (props) => {
    return (
        <div>
            <label for="Rationale and qualitative feedback">Rationale and qualitative feedback:</label>
            <textarea id="problem1_qal" name="qualitative" rows="30" cols="135">
            Here's some help to get you started. For the Income Statement:
                a. 100 loss reduces pretax income by 100
                b. Assuming 40% tax rate, then net income decreases by 60
            </textarea>
        </div>
)};

export default ScratchPad;