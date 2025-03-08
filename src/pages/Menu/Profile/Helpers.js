import { Alert } from "react-native";

import { makePhoneCall, navigate } from "../../../helpers/navigation";

const logoutHandle = () => {
    Alert.alert(
        'Eventoq',
        'Are you sure you want to logout?',
        [
            {
                text: 'Yes',
                onPress: () => {
                    // logout();
                    // navigation.reset({
                    //     index: 0,
                    //     routes: [
                    //         { name: 'GetStarted' }
                    //     ]
                    // });
                    // dispatch(clearSession());
                },
            },
            { text: 'No' },
        ],
        { cancelable: false }
    );
}

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
    },
    {
        icon: "power-outline",
        name: "Logout",
        onPress: logoutHandle
    }
]

export default PanelItem;