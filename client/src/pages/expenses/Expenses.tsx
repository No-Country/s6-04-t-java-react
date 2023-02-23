
import { BillingDetails } from "./BillingDetails"
import ExpensesHistory from "./ExpensesHistory"
import LatestRecords from "./LatestRecords"
export default function Expenses() {
    return (
        <div className="flex flex-row justify-around">
            
              
            <LatestRecords />
            <ExpensesHistory />

        </div>

    )
}
