"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    data: "",
    hora: "",
    estilo: "",
    descricao: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFocus = (name: string) => {
    setFocusedField(name)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulação de envio de formulário
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)

      // Resetar o formulário depois de 3 segundos
      setTimeout(() => {
        setSubmitSuccess(false)
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          data: "",
          hora: "",
          estilo: "",
          descricao: "",
        })
      }, 3000)
    }, 1500)
  }

  return (
    <div className="bg-zinc-800 p-6 rounded-lg shadow-xl transform transition-all duration-500 hover:shadow-red-500/20">
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
                  className={`w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 ${
                    focusedField === "data" ? "border-red-500 shadow-lg shadow-red-500/20" : ""
                  }`}
                />
                <Calendar
                  className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
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
                  className={`w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 ${
                    focusedField === "hora" ? "border-red-500 shadow-lg shadow-red-500/20" : ""
                  }`}
                />
                <Clock
                  className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                    focusedField === "hora" ? "text-red-500" : "text-zinc-400"
                  }`}
                  size={18}
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="estilo" className="block text-sm font-medium mb-1">
              Estilo de tatuagem *
            </label>
            <select
              id="estilo"
              name="estilo"
              value={formData.estilo}
              onChange={handleChange}
              onFocus={() => handleFocus("estilo")}
              onBlur={handleBlur}
              required
              className={`w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 ${
                focusedField === "estilo" ? "border-red-500 shadow-lg shadow-red-500/20" : ""
              }`}
            >
              <option value="">Selecione um estilo</option>
              <option value="realismo">Realismo</option>
              <option value="blackwork">Blackwork</option>
              <option value="neotradicional">Neotradicional</option>
              <option value="outro">Outro</option>
            </select>
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

