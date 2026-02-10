"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Upload, X } from "lucide-react"  // Añadido X a las importaciones

// Add this type after the imports
type FileWithPreview = {
  file: File;
  preview: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    data: "",
    hora: "",
    descricao: "", // Removed estilo from initial state
  })

  // Update the state type
  const [selectedFiles, setSelectedFiles] = useState<FileWithPreview[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    
    // Create previews for new files
    const newFiles = files.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }))
    
    // Update state with max 3 files
    setSelectedFiles(prev => {
      const updated = [...prev, ...newFiles].slice(0, 3)
      return updated
    })
  }

  // Add cleanup function for previews
  useEffect(() => {
    return () => {
      // Cleanup previews on unmount
      selectedFiles.forEach(file => URL.revokeObjectURL(file.preview))
    }
  }, [selectedFiles])

  // Update removeFile function
  const removeFile = (index: number) => {
    setSelectedFiles(prev => {
      const file = prev[index]
      URL.revokeObjectURL(file.preview)
      return prev.filter((_, i) => i !== index)
    })
  }

  const handleFocus = (name: string) => {
    setFocusedField(name)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataWithFiles = new FormData();
      
      // Añade los campos del formulario
      Object.entries(formData).forEach(([key, value]) => {
        formDataWithFiles.append(key, value);
      });

      // Añade los archivos
      selectedFiles.forEach((fileWithPreview, index) => {
        formDataWithFiles.append(`file${index}`, fileWithPreview.file);
      });

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataWithFiles,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.details || 'Erro ao enviar formulário');
      }

      setSubmitSuccess(true);
      
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          data: "",
          hora: "",
          descricao: "", // Removed estilo from reset
        });
        setSelectedFiles([]);
      }, 3000);
    } catch (error) {
      console.error('Erro:', error);
      if (error instanceof Error) {
        alert(error.message || 'Erro ao enviar formulário. Tente novamente.');
      } else {
        alert('Erro ao enviar formulário. Tente novamente.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-zinc-800 text-lightText p-6 rounded-lg shadow-xl transform transition-all duration-500 hover:shadow-red-500/20">
      {submitSuccess ? (
        <div className="text-center py-8 animate-fadeIn">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Solicitação Enviada!</h3>
          <p className="text-zinc-300">
            Obrigado por entrar em contato. Responderei o mais breve possível para confirmar sua sessão.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium mb-1">
              Nome completo *
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              onFocus={() => handleFocus("nome")}
              onBlur={handleBlur}
              required
              className={`w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 ${
                focusedField === "nome" ? "border-red-500 shadow-lg shadow-red-500/20" : ""
              }`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus("email")}
                onBlur={handleBlur}
                required
                className={`w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 ${
                  focusedField === "email" ? "border-red-500 shadow-lg shadow-red-500/20" : ""
                }`}
              />
            </div>

            <div>
              <label htmlFor="telefone" className="block text-sm font-medium mb-1">
                Telefone *
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                onFocus={() => handleFocus("telefone")}
                onBlur={handleBlur}
                required
                className={`w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 ${
                  focusedField === "telefone" ? "border-red-500 shadow-lg shadow-red-500/20" : ""
                }`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <label htmlFor="data" className="block text-sm font-medium mb-1">
                Data preferida *
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="data"
                  name="data"
                  value={formData.data}
                  onChange={handleChange}
                  onFocus={() => handleFocus("data")}
                  onBlur={handleBlur}
                  required
                  className={`w-full px-3 py-2 pr-10 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 text-sm sm:text-base ${
                    focusedField === "data" ? "border-red-500 shadow-lg shadow-red-500/20" : ""
                  }`}
                  style={{
                    WebkitAppearance: 'none',
                    MozAppearance: 'textfield',
                  }}
                />
                <Calendar
                  className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-300 pointer-events-none ${
                    focusedField === "data" ? "text-red-500" : "text-zinc-400"
                  }`}
                  size={18}
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="hora" className="block text-sm font-medium mb-1">
                Hora preferida *
              </label>
              <div className="relative">
                <input
                  type="time"
                  id="hora"
                  name="hora"
                  value={formData.hora}
                  onChange={handleChange}
                  onFocus={() => handleFocus("hora")}
                  onBlur={handleBlur}
                  required
                  className={`w-full px-3 py-2 pr-10 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 text-sm sm:text-base ${
                    focusedField === "hora" ? "border-red-500 shadow-lg shadow-red-500/20" : ""
                  }`}
                  style={{
                    // Mejorar compatibilidad con móviles
                    WebkitAppearance: 'none',
                    MozAppearance: 'textfield',
                  }}
                />
                <Clock
                  className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-300 pointer-events-none ${
                    focusedField === "hora" ? "text-red-500" : "text-zinc-400"
                  }`}
                  size={18}
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="descricao" className="block text-sm font-medium mb-1">
              Descreva sua ideia de tatuagem *
            </label>
            <textarea
              id="descricao"
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              onFocus={() => handleFocus("descricao")}
              onBlur={handleBlur}
              required
              rows={4}
              className={`w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 resize-none transition-all duration-300 ${
                focusedField === "descricao" ? "border-red-500 shadow-lg shadow-red-500/20" : ""
              }`}
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Referências (máximo 3 imagens)
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-zinc-600 border-dashed rounded-md hover:border-red-500 transition-colors duration-300">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-zinc-400" />
                <div className="flex text-sm text-zinc-400">
                  <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-red-500 hover:text-red-400">
                    <span>Upload de arquivo</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      multiple
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="pl-1">ou arraste e solte</p>
                </div>
                <p className="text-xs text-zinc-400">
                  PNG, JPG, GIF até 10MB
                </p>
              </div>
            </div>
            {selectedFiles.length > 0 && (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {selectedFiles.map((file, index) => (
                  <div 
                    key={index} 
                    className="relative group bg-zinc-700 rounded-lg overflow-hidden"
                  >
                    <img
                      src={file.preview}
                      alt={file.file.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-white hover:text-red-500 transition-colors"
                      >
                        <X size={24} />
                      </button>
                    </div>
                    <p className="text-xs text-zinc-300 truncate p-2 absolute bottom-0 left-0 right-0 bg-black bg-opacity-50">
                      {file.file.name}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 transition-all duration-300 transform hover:scale-105"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Enviando...
              </span>
            ) : (
              "Solicitar Sessão"
            )}
          </Button>

          <p className="text-xs text-zinc-400 mt-2">
            * Campos obrigatórios. Entrarei em contato o mais breve possível para confirmar a disponibilidade.
          </p>
        </form>
      )}
    </div>
  )
}

