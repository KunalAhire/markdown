import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireFlameCurved, faMaximize, faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Preview = (props) => {
    const { data } = props;
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        if (!visible) {
            document.getElementById("mainDivSecond").style.display = "none";
            setVisible(true);
        } else {
            document.getElementById("mainDivSecond").style.display = "block";
            setVisible(false);
        }
    }

    return (
        <div className='mt-3 preview' id='mainDivFirst'>
            <div className='d-flex flex-row justify-content-between p-2 main-lable'>
                <div className='fs-5 fw-bolder'>(<FontAwesomeIcon icon={faFireFlameCurved} />) Previewer</div>
                <div className='fs-5' style={{ cursor: "pointer" }}><FontAwesomeIcon icon={visible ? faDownLeftAndUpRightToCenter : faMaximize} onClick={() => { handleClick() }} /></div>
            </div>
            <div id="preview" name="preview" className='main-background ' style={{ minHeight: "200px" }}>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    children={data}
                />
            </div>
        </div>
    )
}

export default Preview