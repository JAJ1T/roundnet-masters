import { useEffect } from 'react';

const useHeaderEffects = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        header.classList.toggle("sticky", window.scrollY > 100);

        const logoImage = document.getElementById("logo-Image");
        if (document.body.classList.contains("dark")) {
          logoImage.src = "imagenes/imagen7.png";
        } else {
          logoImage.src = "imagenes/imagen3.png";
        }
      }
    };

    const menuBtn = document.querySelector('#Menu-btn');
    const MenuForm = document.querySelector('.Menu-container');
    const closeMenuBtn = document.querySelector('#close-Menu-btn');

    menuBtn.addEventListener('click', () => {
      MenuForm.classList.toggle('active');
    });

    closeMenuBtn.addEventListener('click', () => {
      MenuForm.classList.remove('active');
    });

    const btnSwitch = document.querySelector("#switch");
    btnSwitch.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      btnSwitch.classList.toggle("active");

      const header = document.querySelector("header");
      const headerElements = document.querySelectorAll("h1, h4, h5, p");

      headerElements.forEach((header) => {
        if (header.tagName === "H4" || header.tagName === "P") {
          header.style.color = document.body.classList.contains("dark") ? '#fff' : '';
        } else {
          header.style.color = document.body.classList.contains("dark") ? getComputedStyle(document.body).getPropertyValue('--Yellow') : '';
        }
      });

      if (header) {
        header.classList.toggle("dark-header");
      }
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      menuBtn.removeEventListener('click', () => {
        MenuForm.classList.toggle('active');
      });
      closeMenuBtn.removeEventListener('click', () => {
        MenuForm.classList.remove('active');
      });
      btnSwitch.removeEventListener("click", () => {
        // Your code to remove event listeners here
      });
    };
  }, []);
};

export default useHeaderEffects;