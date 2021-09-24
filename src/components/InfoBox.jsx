import { Card, CardContent, Typography } from "@material-ui/core";
import "../public/css/InfoBox.css";
function InfoBox({ title, cases, total, onClick, active }) {
  return (
    <Card
      onClick={onClick}
      className="h-100"
      style={{ cursor: "pointer" }}
      // eslint-disable-next-line
      className={active && "InfoBox--selected"}
    >
      <CardContent>
        <Typography className="InfoBox__title" color="textSecondary">
          {title}
        </Typography>

        <h2 className="infoBox__cases">{cases}</h2>

        <Typography className="InfoBox__total" color="textSecondary">
          {total} Total number
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
