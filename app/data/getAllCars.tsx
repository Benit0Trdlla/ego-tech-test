export const getAllCars = async () => {
    const res = await fetch('https://challenge.egodesign.dev/api/models/', {
        next: { revalidate: 60 } // Revalidate every 60 seconds
    });
    return res.json();
}