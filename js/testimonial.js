const testimonials = [
    {
      name: "Sarah Johnson",
      role: "User",
      content:
        "Absolutely incredible service! The team went above and beyond our expectations. Would highly recommend to anyone looking for top-notch quality.",
      
    },
    {
      name: "Michael Chen",
      role: "Merchant",
      content:
        "The attention to detail and technical expertise demonstrated throughout the project was impressive. A pleasure to work with!",
      
    },
    {
      name: "Emma Wilson",
      role: "User",
      content:
        "Game-changing results for our business. The innovative solutions provided helped us reach our goals faster than expected.",
      
    },
    {
      name: "James Rodriguez",
      role: "User",
      content:
        "Outstanding creativity and professionalism. They truly understand how to deliver exceptional results while maintaining clear communication.",
      
    },
    {
      name: "Lisa Thompson",
      role: "Merchant",
      content:
        "A transformative partnership that has significantly impacted our business growth. Their strategic approach is unmatched.",
      
    },
    {
      name: "David Park",
      role: "Merchant",
      content:
        "Their attention to user experience and design details made all the difference. The final product exceeded our expectations.",
      
    },
  ];
  
  const createTestimonialCard = (testimonial) => {
    return `
          <div class="cardi">
              <div class="profile">
                <div>
                  <div class="name">${testimonial.name}</div>
                  <div class="role">${testimonial.role}</div>
                </div>
              </div>
  
              <div class="content">
                ${testimonial.content}
              </div>
            </div>
      `;
  };
  
  const populateColumn = (columnId) => {
    const column = document.getElementById(columnId);
  
    [...testimonials, ...testimonials].forEach((testimonial) => {
      column.innerHTML += createTestimonialCard(testimonial);
    });
  };
  
  testimonials.sort(() => Math.random() - 0.5);
  populateColumn("column1");
  testimonials.sort(() => Math.random() - 0.5);
  populateColumn("column2");
  testimonials.sort(() => Math.random() - 0.5);
  populateColumn("column3");