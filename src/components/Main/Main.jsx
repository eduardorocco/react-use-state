import Button from "../Button/Button"
import languages from "../../../data/languages"


export default function Main() {
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
                            <Button title = {language.title} />
                        </div>
                    ))}
            </div>
            <div className="container">
                <div className="title"></div>
                <div className="text"></div>
            </div>
        </>
    )
}