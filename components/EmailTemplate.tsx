interface EmailTemplateProps {
    firstName: string;
    text: string;
  }
  
  export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName, text
  }) => (
    <div >
      <h1 >Welcome, {firstName}!</h1>
      <p>{text}</p>
    </div>
  );