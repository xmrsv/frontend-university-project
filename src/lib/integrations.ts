// Enviar mensaje por WhatsApp usando api.whatsapp.com/numero?text=mensaje
export function sendWhatsapp(phone: string, message: string): void {
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${message}`, '_blank');
}
