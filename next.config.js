module.exports = {
    images: {
        domains: ['images.unsplash.com', 'res.cloudinary.com'],
    },
    async redirects() {
        return [
            {
                source: '/services/hardscapes',
                destination: '/services',
                permanent: true,
            },
            {
                source: '/services/custom-installations',
                destination: '/services',
                permanent: true,
            },
            {
                source: '/services/barbeques',
                destination: '/services',
                permanent: true,
            },
        ]
    },
}