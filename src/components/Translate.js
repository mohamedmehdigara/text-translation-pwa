import {
    Form,
    TextArea,
    Button,
    Icon
} from 'semantic-ui-react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';


export default function Translate() {
    const [inputText, setInputText] = useState('');

    return (
        <div>
            <div className="app-header">
                <h2 className="header">Texty Translator</h2>
            </div>

            <div className='app-body'>
                <div>
                    <Form>
                    <Form.Field
 control={TextArea}
 placeholder='Type Text to Translate..'
 onChange={(e) => setInputText(e.target.value)}
/>

                        <select className="language-select">
                            <option>Please Select Language..</option>
                        </select>

                        <Form.Field
                            control={TextArea}
                            placeholder='Your Result Translation..'
                        />

                        <Button
                            color="orange"
                            size="large"
                        >
                            <Icon name='translate' />
                            Translate</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
const getLanguageSource = () => {
    axios.post(`https://libretranslate.de/detect`, {
        q: inputText
    })
    .then((response) => {
        console.log(response.data[0].language)
    })
}