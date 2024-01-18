/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atoms'

function App() {
  
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const messagingkNotificationCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationsAtom);
  const totalNotificationsCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>
      <button>My Network ({networkNotificationCount>=100? "99+": networkNotificationCount})</button>
      <button>Jobs ({jobsNotificationCount>=100? "99+": jobsNotificationCount})</button>
      <button>Messaging ({messagingkNotificationCount>=100? "99+": messagingkNotificationCount})</button>
      <button>Notifications ({notificationCount>=100? "99+": notificationCount})</button>
      <button>Me ({totalNotificationsCount})</button>
    </>
  )
}

export default App
