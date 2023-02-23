import Amenities from "../amenities/Amenities";
import Message from "../../components/Message";
import { BillingResume } from "../expenses/BillingResume";

export default function Home() {
    return (
        // gap-y-4
        <div className="flex flex-col gap-y-4 1048:p-6 ">
            <div className="flex flex-col gap-y-4 1048:grid 1048:grid-cols-2 1048:gap-x-6 ">
                <BillingResume />
                <Message />
            </div>
            <div className="md:mt-6">
                <Amenities />
            </div>
        </div>

    )
}
