import { create } from "zustand";
import { api } from "@/lib/utils";
import Swal from "sweetalert2";

export interface gnreStore {
    isLoading: boolean;
    testXML: (xml: File[]) => Promise<void>;
    // uploadXML: (xmls: File[]) => Promise<void>;
    // uploadPDF: (pdfs: File[]) => Promise<void>;
}

export const useGnreStore = create<gnreStore>((set) => ({
    isLoading: false,

    testXML: async(files: File[]) => {
        try {
            set({ isLoading: true });

            const formData = new FormData();
            files.forEach(file => formData.append("file", file))

            const resp = await api.post(`/ehcrawler/gnre/testeXML`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            if (resp.status === 200) {
                Swal.fire({
                    title: "Successo!",
                    text: "Arquivos enviados com sucesso!",
                    icon: "success",
                })
            } else {
                Swal.fire({
                    title: "Erro!",
                    text: "Houve um erro ao enviar seus arquivos!",
                    icon: "error",
                })
            }

            console.log(resp.data);

            set({ isLoading: false });
        } catch(err) {
            console.log(err)
        }
    }
}));