const HTWButton = (props: { text: string; main: boolean }): JSX.Element => {
    const { text } = props;

    return (
        <a>
            <button className='w-fit px-5 py-2 bg-main rounded-md'>
                <p className='font-bold'>{text}</p>
            </button>
        </a>
    );
};

export default HTWButton;
