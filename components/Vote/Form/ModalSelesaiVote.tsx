"use client"
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
  } from "@headlessui/react";

import Link from 'next/link'
import { useRouter } from "next/navigation";

const ModalSelesaiVote = ({
    status
}:{
    status : boolean
}) => {

    const router = useRouter()

    const closeModal = () => {
        router.push('/')
    }

    return (
        <Dialog open={status} onClose={closeModal} className="relative z-10">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          />
    
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <DialogPanel
                transition
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
              >
                <div className="bg-gradient-to-r from-[#60EFFF] to-[#4545F7] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle
                        as="h3"
                        className="text-xl font-bold text-white text-center"
                      >
                        VOTING BERHASIL!
                      </DialogTitle>
                      <div className="mt-2 text-white text-md">
                       <p>
                        Terima kasih ya! Voting telah berhasil dilakukan, tinggal perbanyak doa dan tahajjud aja
                       </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#60EFFF] to-[#4545F7] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 justify-center text-center">
                  {/* <button
                    type="button"
                    onClick={closeModal}
                    className="inline-flex w-full justify-center rounded-md bg-[#FF5D5D] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Back
                  </button> */}
                  <Link 
                    href={"/"} 
                    className="text-white border-b-2 border-black">
                        Kembali ke halaman utama
                </Link>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      );
}

export default ModalSelesaiVote