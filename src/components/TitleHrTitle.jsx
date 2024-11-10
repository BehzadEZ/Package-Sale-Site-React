import './TitleHrTitle.css';

function TitleHrTitle({text}) {
    return (
        <div className="title-container-hr">
            <hr className='hrStyle' />
            <div className="title-text-hr">{text}</div>
            <hr className='hrStyle'/>
        </div>
    );
}

export default TitleHrTitle;
