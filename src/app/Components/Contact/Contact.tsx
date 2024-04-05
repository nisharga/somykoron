/* eslint-disable @typescript-eslint/no-explicit-any */

const Contact = () => {
    const handleSubmit = (e: any) => {
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        alert(name + email + message);
        e.preventDefault();
    }
  return (
    <div>
      <section className="bg-primary-500 text-success">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-col w-full mb-12 text-center">
            <h1 className="mb-4 text-2xl font-medium text-success sm:text-3xl">
              Contact Us
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3 text-success">
              If you contact with us, Fill up this form
            </p>
          </div>
          <div className="mx-auto lg:w-1/2 md:w-2/3">
            <form className="flex flex-wrap -m-2" onSubmit={handleSubmit}>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="text-sm leading-7 text-success"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-1 text-base leading-8 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none text-success-700 focus:border-success focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="text-sm leading-7 text-success"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-1 text-base leading-8 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none text-success focus:border-success focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="text-sm leading-7 text-success"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full h-32 px-3 py-1 text-base leading-6 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none resize-none text-success focus:ring-2 focus:ring-indigo-200 "
                  ></textarea>
                </div>
              </div>
              <div className="w-full p-2">
                <button className="flex px-8 py-2 mx-auto text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
