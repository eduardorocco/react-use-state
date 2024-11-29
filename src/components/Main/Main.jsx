import React, { useState } from 'react'
import Button from "../Button/Button"
import Card from "../Card/Card"
import languages from "../../../data/languages"

export default function Main() {

    const [selectedLanguage, setSelectedLanguage] = useState(null)

    const LanguageClick = (language) => {
        setSelectedLanguage(language)
    };

    return (
        <>
            <div className="header">
                <div className='title'>
                    Learn Web development
                </div>
            </div>
            <div className="container">
                {
                    languages.map((language) => (
                        <div key={language.id}>
                            <Button
                                title={language.title}
                                onClick={() => LanguageClick(language)} 
                                isSelected={selectedLanguage?.id === language.id} 
                            />
                        </div>
                    ))
                }
            </div>
            <div className="container">
                {selectedLanguage ? (
                    <Card
                        title={selectedLanguage.title}
                        description={selectedLanguage.description}
                    />
                ) : (
                    <Card title="Nessun linguaggio selezionato"/>
                )}
            </div>
        </>
    )
}
