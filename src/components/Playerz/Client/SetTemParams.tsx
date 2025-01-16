'use client'

import { useRouter } from "next/navigation"

const SetTemParams = ({ ParamKey, value }: { ParamKey: string, value: string }) => {
    const router = useRouter()
    const handleButtonClick = () => {
        const CurrentParams = new URLSearchParams(window.location.search)
        for (const [paramKey, paramValue] of CurrentParams.entries()) {
            if (paramValue == 'undefined') {
                CurrentParams.delete(paramKey);
            }
        }
        CurrentParams.set(ParamKey, value)
        router.replace(`?${CurrentParams?.toString()}`, { scroll: false })
    }
    return (
        <button onClick={handleButtonClick} className="w-full absolute h-full left-0 top-0">

        </button>
    )
}

export default SetTemParams
