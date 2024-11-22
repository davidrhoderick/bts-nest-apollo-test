#!/bin/bash -i

# Function to pause and wait for user input
pause() {
    echo
    echo "Press Enter to continue to the next commit or type 'q' to quit..."
    read -r input < /dev/tty  # Explicitly use /dev/tty to ensure interaction
    if [[ "$input" == "q" ]]; then
        echo "Exiting commit walkthrough."
        exit 0
    fi
}

# Ensure the file with commits exists
if [ ! -f commits.txt ]; then
    echo "Error: commits.txt not found!"
    exit 1
fi

# Start the walkthrough
echo "Starting the walkthrough of commits..."
while IFS= read -r line; do
    # Extract commit hash (first word)
    commit_hash=$(echo "$line" | awk '{print $1}')
    commit_message=$(echo "$line" | cut -d' ' -f2-)

    echo
    echo "====================================="
    echo "Commit: $commit_hash"
    echo "Message: $commit_message"
    echo "====================================="
    echo

    # Check out the commit
    git checkout "$commit_hash" || { 
        echo "Error: Could not checkout commit $commit_hash"; 
        exit 1; 
    }

    # Pause for manual input
    pause
done < commits.txt

# Return to the demo branch
echo "Returning to the demo branch..."
git switch demo || { 
    echo "Error: Could not switch to demo branch"; 
    exit 1; 
}
echo "Walkthrough complete!"
