import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

const StartGame = () => {
    return (
        <div className="w-lvw h-lvh bg-black flex justify-center items-center">
            <Popover>
                <PopoverButton className="text-white border-white border px-3 py-2 rounded-lg hover:text-gray-400 hover:border-gray-400">
                    Start
                </PopoverButton>
                <PopoverPanel
                    transition
                    anchor="top"
                    className="divide-y  flex divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0"
                >
                    <div className="p-3">
                        <a className="text-white border-white border px-3 py-2 rounded-lg hover:text-gray-400 hover:border-gray-400 block" href="#">
                            Multi
                        </a>
                    </div>
                    <div className="p-3">
                        <a className="text-white border-white border px-3 py-2 rounded-lg hover:text-gray-400 hover:border-gray-400 block" href="#">
                            Solo
                        </a>
                    </div>
                </PopoverPanel>
            </Popover>
        </div>
    )
}

export default StartGame