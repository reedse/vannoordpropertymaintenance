import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  phone,
  service,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
    <div style={{ background: '#5a7b20', padding: '20px', textAlign: 'center', color: 'white' }}>
      <h1 style={{ margin: '0', fontSize: '24px' }}>New Contact Form Submission</h1>
    </div>
    <div style={{ padding: '20px', border: '1px solid #e1e1e1', borderTop: 'none', backgroundColor: '#f9f9f9' }}>
      <p style={{ fontSize: '16px', margin: '0 0 10px' }}>
        <strong>Name:</strong> {name}
      </p>
      <p style={{ fontSize: '16px', margin: '0 0 10px' }}>
        <strong>Email:</strong> {email}
      </p>
      <p style={{ fontSize: '16px', margin: '0 0 10px' }}>
        <strong>Phone:</strong> {phone || "Not provided"}
      </p>
      <p style={{ fontSize: '16px', margin: '0 0 10px' }}>
        <strong>Service Interested In:</strong> {service || "Not specified"}
      </p>
      <div style={{ fontSize: '16px', margin: '0 0 10px' }}>
        <strong>Message:</strong>
        <div style={{ backgroundColor: 'white', padding: '15px', border: '1px solid #e1e1e1', borderRadius: '5px', marginTop: '5px' }}>
          {message.split('\n').map((line, i) => (
            <p key={i} style={{ margin: '5px 0' }}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
    <div style={{ backgroundColor: '#f2f2f2', padding: '15px', textAlign: 'center', fontSize: '14px', color: '#666', borderRadius: '0 0 4px 4px' }}>
      <p style={{ margin: '0' }}>This email was sent from the contact form on VanNoord Property Maintenance website.</p>
    </div>
  </div>
); 