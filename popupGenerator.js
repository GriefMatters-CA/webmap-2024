function generatePopupContent(feature) {
    // Define common parts of the popup
    var eventLocation = `${feature.properties.location_name}, ${feature.properties.full_address}`;
    var eventName = feature.properties.event_name;
    var eventDate = feature.properties.date;
    var eventLink = feature.properties.event_link;

    // Define the dynamic parts based on feature properties
    var eventTheme = feature.properties.public_y_n;
    var extraContent = '';

    if (feature.properties.type === 'Type1') {
        eventTheme = 'Special Theme 1';  // Example of overriding the theme
        extraContent = `<div class="extra-content">Exclusive content for Type 1</div>`;
    } else if (feature.properties.type === 'Type2') {
        extraContent = `<div class="extra-content">Additional info for Type 2</div>`;
    } else if (feature.properties.type === 'Type3') {
        extraContent = `<div class="extra-content">Different info for Type 3</div>`;
    }

    // Build the popup content using a template literal
    return `
        <div class="wrapper">
            <div class="header">
                <div class="eventName">
                    ${eventName}<br>
                </div>
            </div>
            <div class="photo">
                <img src='header_square.jpg'>
            </div>
            <div class="table-layout">
                <table>
                    <tr>
                        <th>Event Date:</th>
                        <td>${eventDate}</td>
                    </tr>
                    <tr>
                        <th>Event Location:</th>
                        <td>${eventLocation}</td>
                    </tr>
                </table>
            </div>
            ${extraContent} <!-- Insert dynamic content here -->
            <div class="footer">
                <form action="${eventLink}" target="_blank">
                    <button class="learnMoreBtn">
                        Learn More...
                    </button>
                </form>
            </div>
        </div>
    `;
}
