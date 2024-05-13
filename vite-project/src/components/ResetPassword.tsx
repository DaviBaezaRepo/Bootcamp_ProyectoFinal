import React, { useState } from 'react';

function ResetPassword() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Fetch user data from the API
        try {
            const response = await fetch('http://localhost:8080/users');
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const users = await response.json();

            // Check if the entered email exists in the users array
            const userWithEmail = users.find((user: { email: string; }) => user.email === email);
            if (userWithEmail) {
                // Redirect to another route if email exists
                window.location.href = '/ResetCode';
            } else {
                setError('Email no encontrado. Por favor, inténtelo de nuevo.');
            }
        } catch (error) {
            console.error('Error fetching users:', error);
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <main className="w-full flex flex-col items-center justify-center px-4 pt-3">
            <div className="max-w-sm w-full text-gray-600 space-y-8 mb-7">
                <div className="text-center">
                    <img src="../src/assets/better-world-logo1.png" width={200} className="mx-auto" />
                    <div className="space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">¿Has olvidado tu contraseña?</h3>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="mb-12">
                    <div>
                        <label className="font-medium">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-color shadow-sm rounded-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <p className="my-4">Enviaremos un código de verificación a este email si coincide con una cuenta de BetterWorld existente.</p>
                    <button type="submit" className="w-full px-4 pt-2 text-white button2 rounded-lg duration-150">Enviar</button>
                </form>
                <a href="/Login" className="w-full flex btn-margin items-center justify-center gap-x-3 py-2.5 border-bn rounded-lg text-sm duration-150 hover:bg-gray-100">Volver</a>
            </div>
        </main>
    );
}

export default ResetPassword;
