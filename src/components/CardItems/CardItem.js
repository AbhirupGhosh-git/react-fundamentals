import Card from "../UI/Card";
import classes from "./CardItem.module.css";

const CardItem = (props) => {
  return (
    <>
      <Card>
        <div className={classes.card1}>
          <div className={classes["card--titleHead"]}>
            <span className={classes["card--title"]}>Weekly Sales</span>
            <span>📈</span>
          </div>

          <div
            className={classes["card--cost"]}
          >{`$ ${props.sales.weeklySales}`}</div>
          <div
            className={classes["card--percentage"]}
          >{`Increased by ${props.sales.increasedPercent}%`}</div>
        </div>
      </Card>
      <Card>
        <div className={classes.card2}>
          <div className={classes["card--titleHead"]}>
            <span className={classes["card--title"]}>Weekly Sales</span>
            <span>🔖</span>
          </div>
          <div
            className={classes["card--cost"]}
          >{`$ ${props.orders.weeklySales}`}</div>
          <div
            className={classes["card--percentage"]}
          >{`Increased by ${props.orders.increasedPercent}%`}</div>
        </div>
      </Card>
      <Card>
        <div className={classes.card3}>
          <div className={classes["card--titleHead"]}>
            <span className={classes["card--title"]}>Weekly Sales</span>
            <span>💎</span>
          </div>
          <div
            className={classes["card--cost"]}
          >{`$ ${props.visitors.weeklySales}`}</div>
          <div
            className={classes["card--percentage"]}
          >{`Decreased by ${props.visitors.decreasedPercent}%`}</div>
        </div>
      </Card>
    </>
  );
};

export default CardItem;
