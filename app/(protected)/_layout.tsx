import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { useUserStore } from '@/store/authStore';

export default function ProtectedLayout() {

    const user = useUserStore((state) => state.user);

    if(!user?.token) {
        return <Redirect href={"/login"} />
    }

  return (
    <Stack screenOptions={{
        headerShown: false
    }} />
  )
}