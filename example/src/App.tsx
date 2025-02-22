import { useHookTemplate } from 'use-hook-template'
export default function App() {
    const firstName = 'John'
    const lastName = 'Doe'
    const fullName = useHookTemplate(firstName, lastName)

    return (
        <div>
            <p>
                Full Name: <strong>{fullName}</strong>
            </p>
        </div>
    )
}
