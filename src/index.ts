import { useState, useEffect } from 'react'

export const useHookTemplate = (firstName: string, lastName: string): string => {
    const [fullName, setFullName] = useState<string>('')

    useEffect(() => {
        setFullName(`${firstName} ${lastName}`)
    }, [firstName, lastName])

    return fullName
}
