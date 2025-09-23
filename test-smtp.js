const nodemailer = require('nodemailer');

// Configuration SMTP identique à Directus
const transporter = nodemailer.createTransporter({
  host: 'smtp.resend.com',
  port: 587,
  secure: false, // true pour port 465, false pour autres ports
  auth: {
    user: 'resend',
    pass: 'votre_api_key_resend' // Remplacez par votre vraie API key
  }
});

// Test de connexion
async function testSMTP() {
  try {
    await transporter.verify();
    console.log('✅ Connexion SMTP réussie');
    
    // Test d'envoi
    const result = await transporter.sendMail({
      from: 'noreply@votredomaine.com', // Même que EMAIL_FROM
      to: 'gotobin3000@gmail.com',
      subject: 'Test SMTP depuis Directus',
      html: '<p>Test de connexion SMTP</p>'
    });
    
    console.log('✅ Email envoyé:', result.messageId);
  } catch (error) {
    console.error('❌ Erreur SMTP:', error);
  }
}

testSMTP();