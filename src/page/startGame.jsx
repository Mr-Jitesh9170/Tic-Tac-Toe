import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

const StartGame = () => {
    return (
        <div className="w-lvw h-lvh bg-black flex justify-center items-center">
            <Popover>
                <PopoverButton className="text-white  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-4xl px-5 py-2.5 text-center">
                    Start
                </PopoverButton>
                <PopoverPanel
                    transition
                    anchor="top"
                    className="divide-y  flex divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0"
                >
                    <div className="p-3">
                        <a className="block rounded-lg text-gray-50 px-3 py-2 transition hover:bg-white/5" href="#">
                            Multiplayer
                        </a>
                    </div>
                    <div className="p-3">
                        <a className="block rounded-lg px-3  text-gray-50 py-2 transition hover:bg-white/5" href="#">
                            Solo
                        </a>
                    </div>
                </PopoverPanel>
            </Popover>
        </div>
    )
}

export default StartGame