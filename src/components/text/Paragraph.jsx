import classNames from "classnames";

const Paragraph = (props) => {

    const alignment = props.alignment || 'text-left';
    const fontSize = props.fontSize || 'text-lg';

    const classes = classNames(props.classes, alignment, fontSize, 'w-full');

    return <>
        <p className={classes}>
            {props.children}
        </p>
    </>;
};

export {
    Paragraph,
};