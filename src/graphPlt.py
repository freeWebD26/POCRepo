import matplotlib.pyplot as plt

# your 5000 data points
data = [...] 

# create a new figure and set its size
fig = plt.figure(figsize=(10, 5))

# create a new subplot and plot the data as a line graph
ax = fig.add_subplot(1, 1, 1)
ax.plot(data)

# set the title and axis labels
ax.set_title('Heart Rate Simulation')
ax.set_xlabel('Time')
ax.set_ylabel('Heart Rate')

# show the plot
plt.show()
