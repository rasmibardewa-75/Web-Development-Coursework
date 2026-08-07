function EventList() {
    return (
        <div>
            <h1>Event List</h1>

            <form>
                <label>Search Events:</label>
                <input
                    type="text"
                    id="searchInput"
                    placeholder="Enter event name..."
                />
                <input type="button" value="Search" />
            </form>

            <h2>View Events</h2>

            <table border="1">
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Attendees</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>AI Workshop</td>
                        <td>Hands-on workshop on Artificial Intelligence.</td>
                        <td>2025-10-15</td>
                        <td>Bhaktapur</td>
                        <td>5</td>
                    </tr>

                    <tr>
                        <td>Cultural Festival</td>
                        <td>Celebration of local culture and traditions.</td>
                        <td>2024-11-20</td>
                        <td>Lalitpur</td>
                        <td>3</td>
                    </tr>

                    <tr>
                        <td>Career Fair</td>
                        <td>Job seekers and employers connect for career opportunities.</td>
                        <td>2024-12-01</td>
                        <td>Chitwan</td>
                        <td>4</td>
                    </tr>

                    <tr>
                        <td>Digital Marketing Seminar</td>
                        <td>Learn modern digital marketing strategies.</td>
                        <td>2023-12-15</td>
                        <td>Pokhara</td>
                        <td>2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default EventList;