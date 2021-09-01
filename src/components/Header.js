import Button from './Button';

const Header = (props) => {
    const onClick = () => {
        console.log('Clack clack!')
    }
    return (
        <header className='header'>
        <h1>{props.title} Task Tracker</h1>
        <Button color='green' text='Hello' onClick={onClick} />
        <Button color='orange' text='Hi' />
        <Button color='blue' text='Hey' />
        </header>
    )
}

export default Header;