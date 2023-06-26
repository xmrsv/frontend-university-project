/**
 * Abre una nueva pestaña con el enlace de WhatsApp para enviar un mensaje al número indicado
 * @param phone Número de teléfono del destinatario
 * @param message Mensaje a enviar
 */
export function sendWhatsapp(phone: string, message: string): void {
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${message}`, '_blank');
}
