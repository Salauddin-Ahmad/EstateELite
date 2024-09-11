import useAxiosSecure from "../../hook/useAxiosSecure";

  

const Checkout = () => {
    const axiosSecure = useAxiosSecure()
    const handleCreatePayment = () => {
        axiosSecure.post('/create-payment', {
            amount: 1000,
            currency: 'USD',
        })
        .then((res) => {
            console.log(res)
        })
        
    }
    return (
        <div>
            
        </div>
    );
};

export default Checkout;