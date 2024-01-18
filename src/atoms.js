import { atom, selector } from "recoil";


export const networkAtom = atom({
    key:"networkAtom",
    default: 102
});

export const jobsAtom = atom({
    key:"jobsAtom",
    default: 10
});

export const notificationsAtom = atom({
    key:"notificationsAtom",
    default: 1
});

export const messagingAtom = atom({
    key:"messagingAtom",
    default: 2
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const network = get(networkAtom);
        const jobs = get(jobsAtom);
        const notifications = get(notificationsAtom);
        const messages = get(messagingAtom);

        return network+jobs+notifications+messages;
    }
});