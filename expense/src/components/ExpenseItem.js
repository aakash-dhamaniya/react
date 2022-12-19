import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import Button from './Button';
const ExpenseItem =(props)=>{
const deleteF=(e)=>{
//    const parentNode= document.getElementsByClassName("expense-item");
//    const childNode=document.getElementsByClassName("expense-item_description");
//    parentNode.removeChild(childNode);
console.log(e)

}
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item_description">
                <h2>{props.title}</h2>
                <div className='location'> {props.location}</div>
                <div className='expense-item_price'>{props.amount}</div>
                <div className="edit_button">
                    <Button onClick={deleteF} text={'x'}/>
                </div>
            </div>
        </Card>
    )
}
export default ExpenseItem;