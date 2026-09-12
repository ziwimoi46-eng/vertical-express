import { useEffect, useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Mail, MapPin, Phone } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { imageBase } from '@/lib/site-data';

type DeliveryMethod = 'whatsapp' | 'email' | 'both';

const whatsappNumbers = [
  { label: 'Mohammed Shoeb', display: '+91 904 9887 338', value: '919049887338' },
  { label: 'Tafazzul Quazi', display: '+91 915 8806 878', value: '919158806878' },
];

export function ContactPage() {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState('');
  const [delivery, setDelivery] = useState<DeliveryMethod>('whatsapp');
  const [whatsappNumber, setWhatsappNumber] = useState(whatsappNumbers[0].value);
  const [formValues, setFormValues] = useState({ name: '', phone: '', email: '', message: '' });

  useEffect(() => { document.title = 'Contact | Vertical Express Elevators'; }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setError('Please complete the required fields before continuing.');
      form.reportValidity();
      return;
    }
    setError('');
    const data = new FormData(form);
    setFormValues({
      name: String(data.get('name') ?? ''),
      phone: String(data.get('phone') ?? ''),
      email: String(data.get('email') ?? ''),
      message: String(data.get('message') ?? ''),
    });
    setReady(true);
  }

  function buildMessage() {
    return `Vertical Express Elevators enquiry\n\nName: ${formValues.name}\nPhone: ${formValues.phone}\nEmail: ${formValues.email}\nMessage: ${formValues.message}`;
  }

  function sendEnquiry() {
    const message = encodeURIComponent(buildMessage());
    const subject = encodeURIComponent('Vertical Express Elevators enquiry');
    const emailUrl = `mailto:verticalexpresspvtltd@gmail.com?subject=${subject}&body=${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    if (delivery === 'whatsapp') {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } else if (delivery === 'email') {
      window.location.href = emailUrl;
    } else {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      window.location.href = emailUrl;
    }
  }

  return (
    <>
      <section className="bg-[#eef1f2] pt-[78px]">
        <div className="page-wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <Reveal><p className="eyebrow">Vertical Express Elevators Pvt. Ltd.</p><h1 className="display-font mt-5 text-6xl font-semibold leading-[.92] tracking-[-.06em] text-[#202b34] sm:text-8xl">CONTACT<br /><span className="text-[#f4511e]">US.</span></h1><p className="mono-font mt-8 max-w-md text-[10px] uppercase tracking-[.16em] text-[#667279]">verticalexpresspvtltd@gmail.com</p></Reveal>
          <Reveal className="reveal-delay-1"><div className="bg-white p-3 md:p-5"><img src={`${imageBase}hospital-lift.webp`} alt="Hospital lift serving a clinical corridor" className="h-auto max-h-[500px] w-full object-contain" /></div></Reveal>
        </div>
      </section>

      <section className="bg-white py-16 md:py-28">
        <div className="page-wrap grid gap-16 lg:grid-cols-[.72fr_1.28fr]">
          <Reveal>
            <p className="eyebrow">Direct lines</p>
            <div className="mt-8 space-y-8">
              <div><p className="display-font text-xl font-semibold text-[#202b34]">Mohammed Shoeb</p><p className="mono-font mt-1 text-[10px] uppercase tracking-[.14em] text-[#89949a]">Director</p><a href="tel:+919049887338" data-testid="link-phone-mohammed" className="mt-3 flex items-center gap-2 text-sm text-[#f4511e]"><Phone size={15} /> +91 904 9887 338</a></div>
              <div><p className="display-font text-xl font-semibold text-[#202b34]">Tafazzul Quazi</p><p className="mono-font mt-1 text-[10px] uppercase tracking-[.14em] text-[#89949a]">Director</p><a href="tel:+919158806878" data-testid="link-phone-tafazzul" className="mt-3 flex items-center gap-2 text-sm text-[#f4511e]"><Phone size={15} /> +91 915 8806 878</a></div>
              <div className="border-t border-[#d8dee1] pt-7"><a href="mailto:verticalexpresspvtltd@gmail.com" data-testid="link-email" className="flex items-start gap-3 text-sm leading-6 text-[#202b34]"><Mail size={16} className="mt-1 shrink-0 text-[#f4511e]" />verticalexpresspvtltd@gmail.com</a><p data-testid="text-address" className="mt-5 flex items-start gap-3 text-sm leading-6 text-[#667279]"><MapPin size={16} className="mt-1 shrink-0 text-[#f4511e]" />Plot No. 24, Arif Colony,<br />Near Aamkhas Ground,<br />Aurangabad - 431001 (M.H)</p></div>
            </div>
          </Reveal>
          <Reveal className="reveal-delay-1">
            <div className="border-t-2 border-[#202b34] pt-6">
              <p className="eyebrow">Send an enquiry</p>
              {!ready ? (
                <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-7">
                  <div className="grid gap-7 sm:grid-cols-2">
                    <label className="block"><span className="mono-font text-[10px] uppercase tracking-[.12em] text-[#667279]">Your name *</span><input required name="name" data-testid="input-contact-name" className="form-field mt-3 w-full px-0 py-3 text-sm outline-none" /></label>
                    <label className="block"><span className="mono-font text-[10px] uppercase tracking-[.12em] text-[#667279]">Phone *</span><input required type="tel" name="phone" data-testid="input-contact-phone" className="form-field mt-3 w-full px-0 py-3 text-sm outline-none" /></label>
                  </div>
                  <label className="block"><span className="mono-font text-[10px] uppercase tracking-[.12em] text-[#667279]">Email *</span><input required type="email" name="email" data-testid="input-contact-email" className="form-field mt-3 w-full px-0 py-3 text-sm outline-none" /></label>
                  <label className="block"><span className="mono-font text-[10px] uppercase tracking-[.12em] text-[#667279]">Message *</span><textarea required name="message" rows={5} data-testid="input-contact-message" className="form-field mt-3 w-full resize-none px-0 py-3 text-sm outline-none" /></label>
                  {error && <p data-testid="status-contact-error" className="field-error">{error}</p>}
                  <button type="submit" data-testid="button-contact-submit" className="group inline-flex items-center gap-4 bg-[#f4511e] px-6 py-4 text-xs font-bold uppercase tracking-[.12em] text-white transition-colors hover:bg-[#d94113]">Continue enquiry <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></button>
                </form>
              ) : (
                <div className="mt-8">
                  <div data-testid="status-contact-ready" className="border border-[#d8dee1] bg-[#f8f7f3] p-6"><Check className="text-[#f4511e]" size={22} /><p className="display-font mt-5 text-2xl font-semibold text-[#202b34]">Your message is ready to send.</p><p className="mt-3 text-sm leading-6 text-[#667279]">Choose a channel below. WhatsApp and Email will open on your device with your enquiry details prepared. Nothing is sent from this website.</p></div>
                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    {(['whatsapp', 'email', 'both'] as DeliveryMethod[]).map((method) => <label key={method} className="contact-choice flex cursor-pointer items-center gap-3 p-4"><input type="radio" name="delivery" value={method} checked={delivery === method} onChange={() => setDelivery(method)} className="accent-[#f4511e]" /><span className="text-sm font-semibold capitalize text-[#202b34]">{method === 'both' ? 'Both' : method}</span></label>)}
                  </div>
                  {(delivery === 'whatsapp' || delivery === 'both') && <div className="mt-6"><p className="mono-font text-[10px] uppercase tracking-[.12em] text-[#667279]">WhatsApp number</p><div className="mt-3 grid gap-3 sm:grid-cols-2">{whatsappNumbers.map((number) => <label key={number.value} className="contact-choice flex cursor-pointer items-center gap-3 p-4"><input type="radio" name="whatsapp-number" value={number.value} checked={whatsappNumber === number.value} onChange={() => setWhatsappNumber(number.value)} className="accent-[#f4511e]" /><span><span className="block text-sm font-semibold text-[#202b34]">{number.label}</span><span className="mt-1 block text-xs text-[#667279]">{number.display}</span></span></label>)}</div></div>}
                  <div className="mt-7 flex flex-wrap items-center gap-5"><button type="button" onClick={sendEnquiry} data-testid="button-contact-send" className="group inline-flex items-center gap-4 bg-[#f4511e] px-6 py-4 text-xs font-bold uppercase tracking-[.12em] text-white transition-colors hover:bg-[#d94113]">Open selected channel <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></button><button type="button" onClick={() => setReady(false)} data-testid="button-contact-edit" className="text-xs font-bold uppercase tracking-[.12em] text-[#667279] transition-colors hover:text-[#f4511e]">Edit enquiry</button></div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}