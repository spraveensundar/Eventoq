import { makePhoneCall, navigate, reset } from "../../../helpers/navigation";

const PanelItem = [
    {
        icon: "person-outline",
        name: "Account",
        onPress: () => navigate("Account")
    },
    {
        icon: "grid-outline",
        name: "Listings",
        onPress: () => navigate("Listings")
    },
    {
        icon: "calendar-number-outline",
        name: "Bookings",
        onPress: () => navigate("Bookings")
    },
    {
        icon: "call-outline",
        name: "Enquiries",
        onPress: () => makePhoneCall()
    },
    {
        icon: "swap-horizontal",
        name: "Transactions",
        onPress: () => navigate("Transactions")
    },
    {
        icon: "lock-closed-outline",
        name: "Change Password",
        onPress: () => navigate("ChangePassword")
    },
    {
        icon: "notifications-outline",
        name: "Notifications",
        onPress: () => navigate("Notification")
    }
]

export default PanelItem;